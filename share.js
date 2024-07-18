// 기능2: 공유하기
document.getElementById('shareButton').addEventListener('click', async () => {
  try {
    // Check if the Web Share API is available
    if (!navigator.share) {
      alert('Web Share API is not available on your browser.');
      return;
    }

    // Your share data
    const plans = JSON.parse(localStorage.getItem('plans'));
    const shareText = plans ? `내 2024년 신년계획: ${plans.join(', ')}` : '내 2024년 신년계획을 확인해보세요!';

    const shareData = {
      title: '2024년 나의 신년계획',
      text: shareText,
      url: window.location.href
    };

    // Invoke the share dialog
    await navigator.share(shareData);
    console.log('Data was shared successfully');
  } catch (err) {
    console.error('Share failed:', err.message);
  }
});