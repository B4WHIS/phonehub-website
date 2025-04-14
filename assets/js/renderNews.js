const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };
  
  // Render chi tiết tin tức dựa trên 'id'
  const renderNewsDetail = () => {
    const newsId = getQueryParam("id");
    const newsItem = newsData.find((news) => news.id === newsId);
  
    if (newsItem) {
      const newsDetailContainer = document.getElementById("news-detail-container");
      const newsContent = `
        <div class="container">
          <div class="row">
            <div class="col-6 mb-3">
              <img src="${newsItem.coverImage}" class="w-75 text-center rounded-5" alt="${newsItem.title}" />
            </div>
            <div class="col-6">
              <h1>${newsItem.title}</h1>
            </div>
            <div class="content">
              ${newsItem.content}
            </div>
          </div>
        </div>
      `;
      newsDetailContainer.innerHTML = newsContent;
    } else {
      document.getElementById("news-detail-container").innerHTML = "<p>Tin tức không tồn tại.</p>";
    }
  };
  
  
  renderNewsDetail();