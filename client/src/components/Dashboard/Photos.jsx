import { useCallback, useMemo, useRef, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { BarChart2, ImagePlus, Images, Radio, UploadCloud } from 'lucide-react'
import { TEAL, GOLD, CORAL, DEEP, GRID, chartTip, registerCharts } from './charts'

registerCharts()

const SEED_UPLOADS = [
  {
    id: 'reef-snorkel',
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
    name: 'reef-snorkel.jpg',
    status: 'Live ✓',
    tagClass: 'ok',
    progress: 100,
  },
  {
    id: 'sunset-sail',
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80',
    name: 'sunset-sail.jpg',
    status: 'Live ✓',
    tagClass: 'ok',
    progress: 100,
  },
  {
    id: 'rooftop-toast',
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80',
    name: 'rooftop-toast.jpg',
    status: 'In review',
    tagClass: 'pend',
    progress: 100,
  },
]

const LATEST_SHOTS = [
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80',
]

export default function Photos() {
  const [uploads, setUploads] = useState(SEED_UPLOADS)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef(null)

  const photosData = useMemo(
    () => ({
      labels: ['VA-2604', 'VA-2650', 'VA-2712', 'VA-2790', 'VA-2841'],
      datasets: [
        {
          label: 'Photos',
          data: [21, 44, 18, 39, 26],
          backgroundColor: [DEEP, TEAL, GOLD, CORAL, TEAL],
          borderRadius: 9,
          borderSkipped: false,
          barPercentage: 0.65,
          categoryPercentage: 0.7,
        },
      ],
    }),
    [],
  )

  const photosOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...chartTip } },
      scales: {
        y: { beginAtZero: true, grid: { color: GRID }, border: { display: false } },
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { font: { size: 9 } },
        },
      },
    }),
    [],
  )

  const handleFiles = useCallback((files) => {
    ;[...files].forEach((file) => {
      if (!file.type.startsWith('image/')) return
      const url = URL.createObjectURL(file)
      const id = `${file.name}-${Date.now()}`
      const entry = {
        id,
        src: url,
        name: file.name,
        status: 'Uploading',
        tagClass: 'pend',
        progress: 0,
      }
      setUploads((prev) => [entry, ...prev])

      let p = 0
      const interval = setInterval(() => {
        p += 12 + Math.random() * 18
        const progress = Math.min(p, 100)
        setUploads((prev) =>
          prev.map((u) => (u.id === id ? { ...u, progress } : u)),
        )
        if (p >= 100) {
          clearInterval(interval)
          setUploads((prev) =>
            prev.map((u) =>
              u.id === id ? { ...u, status: 'In review', progress: 100 } : u,
            ),
          )
          setTimeout(() => {
            setUploads((prev) =>
              prev.map((u) =>
                u.id === id ? { ...u, status: 'Live ✓', tagClass: 'ok' } : u,
              ),
            )
          }, 1400)
        }
      }, 170)
    })
  }, [])

  function onDragOver(e) {
    e.preventDefault()
    setDragOver(true)
  }

  function onDragLeave(e) {
    e.preventDefault()
    setDragOver(false)
  }

  function onDrop(e) {
    e.preventDefault()
    setDragOver(false)
    handleFiles(e.dataTransfer.files)
  }

  function onFileChange(e) {
    handleFiles(e.target.files)
    e.target.value = ''
  }

  return (
    <div className="grid g-21">
      <div className="panel">
        <div className="panel-head">
          <h3>
            <UploadCloud className="lucide" />
            Upload trip photos
          </h3>
          <small>Ticket VA-2841 · auto-added to your group&apos;s live gallery</small>
        </div>
        <div
          className={`drop${dragOver ? ' over' : ''}`}
          id="dropZone"
          tabIndex={0}
          role="button"
          aria-label="Upload photos"
          onDragOver={onDragOver}
          onDragEnter={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click()
          }}
        >
          <ImagePlus className="lucide" />
          <b>Tap to choose photos</b>
          <span>or drag & drop · JPG, PNG, HEIC · reviewed in ~2 min</span>
          <input
            ref={fileInputRef}
            type="file"
            id="fileInput"
            accept="image/*"
            multiple
            capture="environment"
            onChange={onFileChange}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <div className="up-grid" id="upGrid">
          {uploads.map((u) => (
            <div className="up-card" key={u.id}>
              <img src={u.src} alt="" />
              <div className="m">
                <b>{u.name}</b>
                <div className="bar">
                  <i style={{ width: `${u.progress}%` }}></i>
                </div>
                <span className={`tag ${u.tagClass}`}>{u.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gap: '1rem', alignContent: 'start' }}>
        <div className="panel">
          <div className="panel-head">
            <h3>
              <BarChart2 className="lucide" />
              Photos per trip
            </h3>
            <small>148 total</small>
          </div>
          <div className="chart-box" style={{ height: 185 }}>
            <Bar data={photosData} options={photosOptions} />
          </div>
          <div className="mini-bars">
            <div className="mb">
              <div className="mb-top">
                <span>VA-2650 Beach</span>
                <b>44 shots</b>
              </div>
              <div className="track">
                <div className="fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="mb">
              <div className="mb-top">
                <span>VA-2790 Taste</span>
                <b>39 shots</b>
              </div>
              <div className="track">
                <div
                  className="fill"
                  style={{
                    width: '89%',
                    background: 'linear-gradient(90deg,#F2A93B,#f7c069)',
                  }}
                ></div>
              </div>
            </div>
            <div className="mb">
              <div className="mb-top">
                <span>VA-2841 Upcoming</span>
                <b>26 shots</b>
              </div>
              <div className="track">
                <div className="fill" style={{ width: '59%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>
              <Images className="lucide" />
              Your latest live shots
            </h3>
            <span className="tag live">
              <Radio className="lucide" />
              Live
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.6rem' }}>
            {LATEST_SHOTS.map((src) => (
              <img
                key={src}
                style={{
                  borderRadius: 11,
                  height: 105,
                  width: '100%',
                  objectFit: 'cover',
                }}
                src={src}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
