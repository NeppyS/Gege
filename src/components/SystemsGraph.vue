<template>
  <div class="systems-graph" :class="{ immersive }">
    <div
      ref="stageRef"
      class="graph-stage"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointercancel="handlePointerUp"
      @pointerleave="handlePointerLeave"
    >
      <canvas ref="canvasRef" aria-hidden="true"></canvas>

      <div v-if="activeNode" class="graph-tooltip" :style="tooltipStyle">
        <span>{{ clusterName(activeNode.group) }}</span>
        <strong>{{ activeNode.label }}</strong>
        <small>{{ activeNode.summary }}</small>
      </div>

      <p class="sr-only">{{ graphDescription }}</p>
    </div>

    <div v-if="!immersive" class="graph-clusters" aria-label="Graph clusters">
      <div v-for="cluster in clusterSummaries" :key="cluster.id" class="graph-cluster">
        <span :style="{ backgroundColor: cluster.color }"></span>
        <div>
          <strong>{{ cluster.label }}</strong>
          <small>{{ cluster.count }} nodes</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { focusAreas, skillGroups, systems, workflowSteps } from '../data/portfolio'

defineOptions({
  name: 'SystemsGraph',
})

defineProps({
  immersive: {
    type: Boolean,
    default: false,
  },
})

const clusterMeta = [
  { id: 'core', label: 'Core', color: '#f5fff7', anchorX: 0.5, anchorY: 0.52, orbitStart: 0 },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#5ed9ff',
    anchorX: 0.76,
    anchorY: 0.46,
    orbitStart: -0.4,
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#ff6b7a',
    anchorX: 0.5,
    anchorY: 0.22,
    orbitStart: -1.35,
  },
  {
    id: 'systems',
    label: 'Systems',
    color: '#62ff9c',
    anchorX: 0.22,
    anchorY: 0.58,
    orbitStart: 2.65,
  },
  { id: 'data', label: 'Data', color: '#f4be4f', anchorX: 0.58, anchorY: 0.76, orbitStart: 0.8 },
  {
    id: 'workflow',
    label: 'Workflow',
    color: '#c58cff',
    anchorX: 0.8,
    anchorY: 0.7,
    orbitStart: 0.2,
  },
  {
    id: 'operations',
    label: 'Operations',
    color: '#ff8a3d',
    anchorX: 0.3,
    anchorY: 0.32,
    orbitStart: 2.15,
  },
]

const groupClusterMap = {
  Frontend: 'frontend',
  Backend: 'backend',
  Systems: 'systems',
  'Data & Tools': 'data',
}
const fullCircle = Math.PI * 2

const stageRef = ref(null)
const canvasRef = ref(null)
const activeNode = ref(null)
const tooltip = ref({ x: 0, y: 0 })

const graphModel = createGraphModel()
const clusterSummaries = clusterMeta.map((cluster) => ({
  ...cluster,
  count: graphModel.nodes.filter((node) => node.group === cluster.id).length,
}))
const graphDescription = `Interactive systems graph with ${graphModel.nodes.length} nodes and ${graphModel.edges.length} links across ${clusterMeta.length} work clusters.`
const tooltipStyle = computed(() => ({
  transform: `translate(${tooltip.value.x}px, ${tooltip.value.y}px)`,
}))

let canvasContext
let graphNodes = []
let graphEdges = []
let width = 0
let height = 0
let animationFrame = 0
let resizeObserver
let motionQuery
let reduceMotion = false
let lastFrameTime = 0
let draggedNode = null

function createGraphModel() {
  const nodes = []
  const edges = []
  const nodesByLabel = new Map()

  const addNode = ({ id, label, group, weight = 1, summary }) => {
    const node = { id, label, group, weight, summary }
    nodes.push(node)
    nodesByLabel.set(label.toLowerCase(), node)
    return node
  }

  const ensureNode = (label, group, weight, summary) => {
    const key = label.toLowerCase()

    if (nodesByLabel.has(key)) {
      return nodesByLabel.get(key)
    }

    return addNode({
      id: `${group}-${slugify(label)}`,
      label,
      group,
      weight,
      summary,
    })
  }

  const addEdge = (source, target, weight = 1) => {
    edges.push({
      id: `${source.id}->${target.id}`,
      source: source.id,
      target: target.id,
      weight,
    })
  }

  const core = addNode({
    id: 'core-nephten',
    label: 'Nephten',
    group: 'core',
    weight: 2.1,
    summary: 'Full-stack IT developer and technician',
  })
  const operationsHub = ensureNode('Operations', 'operations', 1.36, 'Operational system work')
  const workflowHub = ensureNode('Workflow', 'workflow', 1.32, 'Troubleshooting and build process')

  addEdge(core, operationsHub, 1.25)
  addEdge(core, workflowHub, 1.12)

  skillGroups.forEach((group) => {
    const cluster = groupClusterMap[group.title] || 'systems'
    const groupNode = ensureNode(group.title, cluster, 1.35, `${group.title} capability group`)

    addEdge(core, groupNode, 1.5)

    group.items.forEach((item) => {
      const itemNode = ensureNode(item, cluster, 0.78, `${group.title} skill`)

      addEdge(groupNode, itemNode, 0.82)
    })
  })

  focusAreas.forEach((area) => {
    const areaNode = ensureNode(area.title, 'operations', 1.08, 'Focus area')

    addEdge(operationsHub, areaNode, 0.92)
  })

  workflowSteps.forEach((step) => {
    const stepNode = ensureNode(step.title, 'workflow', 1.05, 'Workflow step')

    addEdge(workflowHub, stepNode, 0.9)
  })

  systems.forEach((system) => {
    const systemNode = ensureNode(system.title, 'operations', 1.2, system.meta)

    addEdge(operationsHub, systemNode, 0.98)

    system.stack.forEach((tech) => {
      const techNode = ensureNode(tech, groupClusterMapForTech(tech), 0.78, 'Connected tool')

      addEdge(systemNode, techNode, 0.68)
    })
  })

  return { nodes, edges }
}

function groupClusterMapForTech(tech) {
  if (['Next.js', 'TypeScript', 'React.js', 'Vue.js', 'Tailwind CSS'].includes(tech)) {
    return 'frontend'
  }

  if (['Node.js', 'Directus'].includes(tech)) {
    return 'backend'
  }

  if (['MySQL', 'PHPMyAdmin', 'Docker', 'Git/GitHub'].includes(tech)) {
    return 'data'
  }

  return 'systems'
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function clusterName(group) {
  return clusterMeta.find((cluster) => cluster.id === group)?.label || group
}

function clusterColor(group) {
  return clusterMeta.find((cluster) => cluster.id === group)?.color || '#f5fff7'
}

function clusterAnchor(group) {
  const cluster = clusterMeta.find((item) => item.id === group) || clusterMeta[0]

  return {
    x: cluster.anchorX * width,
    y: cluster.anchorY * height,
  }
}

function clusterDefinition(group) {
  return clusterMeta.find((item) => item.id === group) || clusterMeta[0]
}

function clusterSpread(group, nodeCount = 1) {
  const base = Math.min(width, height)
  const groupMultiplier = group === 'operations' || group === 'data' ? 0.082 : 0.072
  const maxSpread = nodeCount > 6 ? 78 : 66

  return clamp(base * groupMultiplier, 34, maxSpread)
}

function createGraphLayout() {
  const nodesByGroup = new Map()
  const layoutById = new Map()

  graphModel.nodes.forEach((node) => {
    const groupNodes = nodesByGroup.get(node.group) || []

    groupNodes.push(node)
    nodesByGroup.set(node.group, groupNodes)
  })

  nodesByGroup.forEach((nodes, group) => {
    const cluster = clusterDefinition(group)
    const anchor = clusterAnchor(group)
    const sortedNodes = [...nodes].sort(
      (first, second) => second.weight - first.weight || first.label.localeCompare(second.label),
    )
    const orbitNodes = group === 'core' ? [] : sortedNodes.slice(1)
    const orbitCount = orbitNodes.length
    const firstRingCount = Math.min(orbitCount, 6)
    const spread = clusterSpread(group, orbitCount)

    sortedNodes.forEach((node, index) => {
      let x = anchor.x
      let y = anchor.y
      const isHub = index === 0

      if (group !== 'core' && index > 0) {
        const orbitIndex = index - 1
        const isSecondRing = orbitIndex >= firstRingCount
        const ringIndex = isSecondRing ? orbitIndex - firstRingCount : orbitIndex
        const ringCount = isSecondRing ? orbitCount - firstRingCount : firstRingCount
        const angle = cluster.orbitStart + (ringIndex / Math.max(ringCount, 1)) * fullCircle
        const distance = spread * (isSecondRing ? 1.48 : 1)

        x += Math.cos(angle) * distance
        y += Math.sin(angle) * distance
      }

      layoutById.set(node.id, {
        x: clamp(x, 40, width - 40),
        y: clamp(y, 40, height - 40),
        isHub,
      })
    })
  })

  return layoutById
}

function setupGraph() {
  const layoutById = createGraphLayout()

  graphNodes = graphModel.nodes.map((node, index) => {
    const layout = layoutById.get(node.id) || { ...clusterAnchor(node.group), isHub: false }
    const motionPhase = index * 0.91 + node.label.length * 0.17

    return {
      ...node,
      x: layout.x,
      y: layout.y,
      baseHomeX: layout.x,
      baseHomeY: layout.y,
      homeX: layout.x,
      homeY: layout.y,
      motionPhase,
      motionRadius: layout.isHub ? 5.5 : 10 + (index % 4) * 1.8,
      motionSpeed: layout.isHub ? 0.38 : 0.54 + (index % 5) * 0.04,
      vx: 0,
      vy: 0,
      isHub: layout.isHub,
      radius: 3.1 + node.weight * (layout.isHub ? 3.8 : 3.1),
    }
  })

  const nodesById = new Map(graphNodes.map((node) => [node.id, node]))

  graphEdges = graphModel.edges
    .map((edge) => ({
      ...edge,
      sourceNode: nodesById.get(edge.source),
      targetNode: nodesById.get(edge.target),
    }))
    .filter((edge) => edge.sourceNode && edge.targetNode)
}

function updateLivingHomes(time) {
  const tick = time / 1000

  graphNodes.forEach((node) => {
    const radius = node.motionRadius
    const xMotion = Math.cos(tick * node.motionSpeed + node.motionPhase) * radius
    const yMotion =
      Math.sin(tick * node.motionSpeed * 0.74 + node.motionPhase * 1.17) * radius * 0.62

    node.homeX = clamp(node.baseHomeX + xMotion, 24, width - 24)
    node.homeY = clamp(node.baseHomeY + yMotion, 24, height - 24)
  })
}

function resizeCanvas() {
  if (!stageRef.value || !canvasRef.value) {
    return
  }

  const rect = stageRef.value.getBoundingClientRect()
  const nextWidth = Math.max(320, Math.floor(rect.width))
  const nextHeight = Math.max(360, Math.floor(rect.height))
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)

  width = nextWidth
  height = nextHeight
  canvasRef.value.width = Math.floor(width * pixelRatio)
  canvasRef.value.height = Math.floor(height * pixelRatio)
  canvasContext = canvasRef.value.getContext('2d')
  canvasContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

  activeNode.value = null
  setupGraph()
  drawGraph(performance.now())
}

function updateGraph(delta, time) {
  updateLivingHomes(time)

  graphEdges.forEach((edge) => {
    const dx = edge.targetNode.x - edge.sourceNode.x
    const dy = edge.targetNode.y - edge.sourceNode.y
    const distance = Math.hypot(dx, dy) || 1
    const homeDx = edge.targetNode.homeX - edge.sourceNode.homeX
    const homeDy = edge.targetNode.homeY - edge.sourceNode.homeY
    const targetDistance = Math.hypot(homeDx, homeDy) || Math.min(width, height) * 0.08
    const force =
      (distance - targetDistance) *
      (edge.sourceNode.group === edge.targetNode.group ? 0.0008 : 0.00018)
    const fx = (dx / distance) * force
    const fy = (dy / distance) * force

    if (edge.sourceNode !== draggedNode) {
      edge.sourceNode.vx += fx
      edge.sourceNode.vy += fy
    }

    if (edge.targetNode !== draggedNode) {
      edge.targetNode.vx -= fx
      edge.targetNode.vy -= fy
    }
  })

  for (let index = 0; index < graphNodes.length; index += 1) {
    for (let otherIndex = index + 1; otherIndex < graphNodes.length; otherIndex += 1) {
      const node = graphNodes[index]
      const otherNode = graphNodes[otherIndex]
      const dx = otherNode.x - node.x
      const dy = otherNode.y - node.y
      const distance = Math.max(Math.hypot(dx, dy), 1)
      const minimumDistance =
        node.radius + otherNode.radius + (node.group === otherNode.group ? 14 : 24)

      if (distance >= minimumDistance) {
        continue
      }

      const force = (minimumDistance - distance) * 0.014
      const fx = (dx / distance) * force
      const fy = (dy / distance) * force

      if (node !== draggedNode) {
        node.vx -= fx
        node.vy -= fy
      }

      if (otherNode !== draggedNode) {
        otherNode.vx += fx
        otherNode.vy += fy
      }
    }
  }

  graphNodes.forEach((node) => {
    if (node === draggedNode) {
      return
    }

    const homePull = node.isHub ? 0.055 : 0.044

    node.vx += (node.homeX - node.x) * homePull
    node.vy += (node.homeY - node.y) * homePull
    node.vx *= 0.68
    node.vy *= 0.68
    node.vx = clamp(node.vx, -7, 7)
    node.vy = clamp(node.vy, -7, 7)
    node.x += node.vx * delta
    node.y += node.vy * delta
    node.x = clamp(node.x, 18, width - 18)
    node.y = clamp(node.y, 18, height - 18)
  })
}

function drawGraph(time) {
  if (!canvasContext) {
    return
  }

  const activeId = activeNode.value?.id

  canvasContext.clearRect(0, 0, width, height)
  drawBackground(time)
  drawClusterGuides(time)

  graphEdges.forEach((edge) => {
    const connected = activeId && (edge.source === activeId || edge.target === activeId)

    drawEdge(edge, connected)
  })

  graphNodes.forEach((node) => {
    drawNode(node, time, activeId === node.id)
  })
}

function drawBackground(time) {
  const gridShift = reduceMotion ? 0 : (time / 85) % 44
  const gradient = canvasContext.createRadialGradient(
    width * 0.5,
    height * 0.42,
    20,
    width * 0.5,
    height * 0.5,
    Math.max(width, height) * 0.72,
  )

  gradient.addColorStop(0, 'rgba(16, 24, 20, 0.98)')
  gradient.addColorStop(0.55, 'rgba(8, 12, 11, 0.98)')
  gradient.addColorStop(1, 'rgba(3, 5, 4, 1)')
  canvasContext.fillStyle = gradient
  canvasContext.fillRect(0, 0, width, height)

  canvasContext.strokeStyle = 'rgba(132, 255, 180, 0.055)'
  canvasContext.lineWidth = 1

  for (let x = -44 + gridShift; x < width + 44; x += 44) {
    canvasContext.beginPath()
    canvasContext.moveTo(x, 0)
    canvasContext.lineTo(x, height)
    canvasContext.stroke()
  }

  for (let y = -44 + gridShift * 0.62; y < height + 44; y += 44) {
    canvasContext.beginPath()
    canvasContext.moveTo(0, y)
    canvasContext.lineTo(width, y)
    canvasContext.stroke()
  }
}

function drawClusterGuides(time) {
  clusterMeta
    .filter((cluster) => cluster.id !== 'core')
    .forEach((cluster) => {
      const anchor = clusterAnchor(cluster.id)
      const color = hexToRgb(cluster.color)
      const nodeCount = clusterSummaries.find((summary) => summary.id === cluster.id)?.count || 1
      const pulse = reduceMotion ? 0 : Math.sin(time / 950 + cluster.orbitStart) * 2.8
      const radius = clusterSpread(cluster.id, nodeCount) + 20 + pulse

      canvasContext.beginPath()
      canvasContext.arc(anchor.x, anchor.y, radius, 0, fullCircle)
      canvasContext.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${reduceMotion ? 0.08 : 0.1})`
      canvasContext.lineWidth = 1
      canvasContext.setLineDash([3, 9])
      canvasContext.stroke()
      canvasContext.setLineDash([])
    })
}

function drawEdge(edge, connected) {
  const sourceColor = hexToRgb(clusterColor(edge.sourceNode.group))
  const targetColor = hexToRgb(clusterColor(edge.targetNode.group))
  const gradient = canvasContext.createLinearGradient(
    edge.sourceNode.x,
    edge.sourceNode.y,
    edge.targetNode.x,
    edge.targetNode.y,
  )

  gradient.addColorStop(
    0,
    `rgba(${sourceColor.r}, ${sourceColor.g}, ${sourceColor.b}, ${connected ? 0.72 : 0.14})`,
  )
  gradient.addColorStop(
    1,
    `rgba(${targetColor.r}, ${targetColor.g}, ${targetColor.b}, ${connected ? 0.72 : 0.11})`,
  )

  canvasContext.beginPath()
  canvasContext.moveTo(edge.sourceNode.x, edge.sourceNode.y)
  canvasContext.lineTo(edge.targetNode.x, edge.targetNode.y)
  canvasContext.strokeStyle = gradient
  canvasContext.lineWidth = connected ? 1.45 : 0.58
  canvasContext.stroke()
}

function drawNode(node, time, selected) {
  const color = hexToRgb(clusterColor(node.group))
  const pulse = reduceMotion ? 0 : Math.sin(time / 520 + node.x * 0.01) * 0.9
  const radius = node.radius + (selected ? 3 : pulse * 0.24)

  canvasContext.beginPath()
  canvasContext.arc(node.x, node.y, radius * 2.6, 0, Math.PI * 2)
  canvasContext.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${selected ? 0.15 : 0.055})`
  canvasContext.fill()

  canvasContext.beginPath()
  canvasContext.arc(node.x, node.y, radius, 0, Math.PI * 2)
  canvasContext.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${selected ? 1 : 0.86})`
  canvasContext.fill()

  canvasContext.beginPath()
  canvasContext.arc(node.x, node.y, Math.max(1.6, radius * 0.32), 0, Math.PI * 2)
  canvasContext.fillStyle = 'rgba(3, 5, 4, 0.74)'
  canvasContext.fill()

  if (node.isHub || selected) {
    drawNodeLabel(node, selected)
  }
}

function drawNodeLabel(node, selected) {
  const offset = node.radius + 9
  const labelDirection = node.homeX > width * 0.72 ? -1 : 1

  canvasContext.font = selected
    ? '900 12px "SFMono-Regular", Consolas, monospace'
    : '850 10px "SFMono-Regular", Consolas, monospace'
  canvasContext.textBaseline = 'middle'
  canvasContext.textAlign = labelDirection < 0 ? 'right' : 'left'
  canvasContext.fillStyle = selected ? '#f5fff7' : 'rgba(245, 255, 247, 0.72)'
  canvasContext.fillText(node.label, node.x + offset * labelDirection, node.y)
  canvasContext.textAlign = 'left'
}

function animate(time) {
  const elapsed = lastFrameTime ? Math.min((time - lastFrameTime) / 16.67, 2.4) : 1

  lastFrameTime = time

  if (!reduceMotion) {
    updateGraph(elapsed, time)
  }

  drawGraph(time)
  animationFrame = window.requestAnimationFrame(animate)
}

function handlePointerDown(event) {
  const point = getPoint(event)
  const node = findNode(point.x, point.y)

  if (!node) {
    return
  }

  draggedNode = node
  activeNode.value = node
  tooltip.value = tooltipPoint(point)
  stageRef.value?.setPointerCapture(event.pointerId)
}

function handlePointerMove(event) {
  const point = getPoint(event)

  if (draggedNode) {
    draggedNode.x = clamp(point.x, 18, width - 18)
    draggedNode.y = clamp(point.y, 18, height - 18)
    draggedNode.vx = 0
    draggedNode.vy = 0
  }

  activeNode.value = draggedNode || findNode(point.x, point.y)
  tooltip.value = tooltipPoint(point)
}

function handlePointerUp(event) {
  draggedNode = null
  stageRef.value?.releasePointerCapture(event.pointerId)
}

function handlePointerLeave() {
  if (!draggedNode) {
    activeNode.value = null
  }
}

function getPoint(event) {
  const rect = canvasRef.value.getBoundingClientRect()

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  }
}

function tooltipPoint(point) {
  const x = clamp(point.x + 18, 12, width - 210)
  const y = clamp(point.y + 18, 12, height - 88)

  return { x, y }
}

function findNode(x, y) {
  let nearest = null
  let nearestDistance = Infinity

  graphNodes.forEach((node) => {
    const distance = Math.hypot(node.x - x, node.y - y)

    if (distance < node.radius + 9 && distance < nearestDistance) {
      nearest = node
      nearestDistance = distance
    }
  })

  return nearest
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function hexToRgb(hex) {
  const value = hex.replace('#', '')
  const number = Number.parseInt(value, 16)

  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  }
}

function handleMotionChange(event) {
  reduceMotion = event.matches
}

function startGraph() {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion = motionQuery.matches

  if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', handleMotionChange)
  } else {
    motionQuery.addListener(handleMotionChange)
  }

  resizeCanvas()

  if (window.ResizeObserver) {
    resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(stageRef.value)
  } else {
    window.addEventListener('resize', resizeCanvas)
  }

  animationFrame = window.requestAnimationFrame(animate)
}

onMounted(() => {
  nextTick(startGraph)
})

onUnmounted(() => {
  window.cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  window.removeEventListener('resize', resizeCanvas)

  if (motionQuery?.removeEventListener) {
    motionQuery.removeEventListener('change', handleMotionChange)
  } else {
    motionQuery?.removeListener(handleMotionChange)
  }
})
</script>

<style scoped>
.systems-graph {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  gap: 18px;
  align-items: stretch;
  height: 100%;
}

.systems-graph.immersive {
  display: block;
  min-height: 0;
}

.graph-stage {
  position: relative;
  height: clamp(380px, 52vw, 620px);
  min-height: 0;
  overflow: hidden;
  border: 1px solid var(--line-strong);
  border-radius: 24px;
  background: #030504;
  box-shadow: var(--shadow);
  touch-action: none;
}

.systems-graph.immersive .graph-stage {
  height: 100%;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.graph-stage canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.graph-tooltip {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  display: grid;
  gap: 4px;
  width: 198px;
  border: 1px solid rgba(132, 255, 180, 0.28);
  border-radius: 14px;
  background: rgba(6, 8, 7, 0.92);
  padding: 11px 12px;
  pointer-events: none;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.42);
}

.graph-tooltip span {
  color: var(--green);
  font-family: var(--mono-font);
  font-size: 0.68rem;
  font-weight: 900;
  text-transform: uppercase;
}

.graph-tooltip strong {
  color: #f5fff7;
  font-size: 0.92rem;
  line-height: 1.08;
}

.graph-tooltip small {
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 760;
}

.graph-clusters {
  display: grid;
  align-content: start;
  gap: 10px;
}

.graph-cluster {
  display: grid;
  grid-template-columns: 12px 1fr;
  gap: 10px;
  align-items: center;
  min-height: 54px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(10, 15, 12, 0.82);
  padding: 10px;
}

.graph-cluster > span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 22px currentColor;
}

.graph-cluster strong,
.graph-cluster small {
  display: block;
}

.graph-cluster strong {
  color: #f5fff7;
  font-size: 0.88rem;
  font-weight: 900;
}

.graph-cluster small {
  margin-top: 2px;
  color: var(--muted);
  font-family: var(--mono-font);
  font-size: 0.72rem;
  font-weight: 760;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

@media (max-width: 860px) {
  .systems-graph {
    grid-template-columns: 1fr;
  }

  .graph-clusters {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .graph-stage {
    height: 430px;
    border-radius: 20px;
  }

  .systems-graph.immersive .graph-stage {
    height: 100%;
    border-radius: 0;
  }

  .graph-clusters {
    grid-template-columns: 1fr;
  }
}
</style>
