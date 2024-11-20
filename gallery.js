function showImage(src, description) {
    const imageViewer = document.getElementById('image-viewer-src');
    imageViewer.src = src;
    const imageDescription = document.getElementById('image-description');
    imageDescription.textContent = description;
    const modal = document.getElementById('image-modal');
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
  }
  