import "./styles.css";

const divZoomUp = document.getElementById("zoomUp");
const divZoomUpImg = divZoomUp.children[0];
const zoomed = document.getElementById("zoomed");

divZoomUp.addEventListener("mouseenter", createZoomElement);
divZoomUp.addEventListener("mouseleave", deleteZoomElement);

function deleteZoomElement() {
  const zoomElement = document.getElementById("zoomElement");

  zoomed.style.visibility = "hidden";
  zoomed.style.opacity = 0;
  divZoomUp.onmousemove = null;

  zoomElement.remove();
}

function createZoomElement() {
  const zoomElement = document.createElement("div");

  zoomElement.setAttribute("id", "zoomElement");
  zoomElement.style.position = "absolute";
  zoomElement.style.width = `${
    zoomed.offsetWidth / (divZoomUpImg.naturalWidth / divZoomUp.offsetWidth)
  }px`;
  zoomElement.style.height = `${
    zoomed.offsetHeight / (divZoomUpImg.naturalHeight / divZoomUp.offsetHeight)
  }px`;
  zoomElement.style.opacity = 0.4;
  zoomElement.style.background = "#c3c359";
  divZoomUp.append(zoomElement);

  zoomed.style.visibility = "visible";
  zoomed.style.opacity = 1;

  const borderLeft = zoomElement.offsetWidth / 2;
  const borderRight = divZoomUp.offsetWidth - zoomElement.offsetWidth;
  const borderTop = zoomElement.offsetHeight / 2;
  const borderBottom = divZoomUp.offsetHeight - zoomElement.offsetHeight;
  divZoomUp.onmousemove = (event) => {
    const x = Math.min(
      Math.max(event.pageX - divZoomUp.offsetLeft, borderLeft),
      borderRight + borderLeft
    );
    const y = Math.min(
      Math.max(event.pageY - divZoomUp.offsetTop, borderTop),
      borderBottom + borderTop
    );

    zoomElement.style.left = `${x - borderLeft}px`;
    zoomElement.style.top = `${y - borderTop}px`;

    const indexWidth = divZoomUpImg.naturalWidth / divZoomUp.offsetWidth;
    const indexHeight = divZoomUpImg.naturalHeight / divZoomUp.offsetHeight;

    zoomed.children[0].style.left = `${-(x - borderLeft) * indexWidth}px`;
    zoomed.children[0].style.top = `${-(y - borderTop) * indexHeight}px`;
  };
}
