import './style.css'

const images = document.getElementsByClassName("image") as HTMLCollectionOf<HTMLImageElement>

let globalIndex: number = 0

let last: { x: number, y: number } = { x: 0, y: 0 }

const activate = (img: HTMLImageElement, x: number, y: number): void => {
    img.style.left = `${x}px`
    img.style.top = `${y}px`

    img.dataset.status = "active"

    last = { x, y }
}

const distanceFromLast = (x: number, y: number): number => {
    return Math.hypot(x - last.x, y - last.y)
}

window.onmousemove = (e: MouseEvent): void => {
    if (distanceFromLast(e.clientX, e.clientY) > 80) {
        const lead = images[globalIndex % images.length]
        const tail = images[(globalIndex - 5) % images.length]

        activate(lead, e.clientX, e.clientY)

        if (tail) tail.dataset.status = "inactive"

        globalIndex++
    }
}