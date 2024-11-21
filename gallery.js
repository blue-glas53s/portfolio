function showImage(src, description) {
    const imageViewer = document.getElementById('image-viewer-src');
    imageViewer.src = src;
    const imageDescription = document.getElementById('image-description');
    imageDescription.textContent = description;
    const modal = document.getElementById('image-modal');
    modal.style.display = 'block';
  }

  function closeModal() {
    const imageModal = document.getElementById('image-modal');
    const videoModal = document.getElementById('video-modal');
    imageModal.style.display = 'none';
    videoModal.style.display = 'none';
  }
  
  
  function showVideo(src, description) {
    const videoViewer = document.getElementById('video-viewer-src');
    videoViewer.src = src;
    const videoDescription = document.getElementById('video-description');
    videoDescription.textContent = description;
    const modal = document.getElementById('video-modal');
    modal.style.display = 'block';
  }
  
  