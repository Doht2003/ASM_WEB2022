let dataBlogs = [
    {
      id: "blog1",
      title: "Bài biết mới",
      image: "https://templateacefic.000webhostapp.com/images/Untitled-5.png",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla modi, quos laboriosam laborum debitis ipsa vitae?",
      blogCateId: "cate1",
    },
    {
      id: "blog2",
      title: "Bài biết mới",
      image: "https://templateacefic.000webhostapp.com/images/Untitled-6.png",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla modi, quos laboriosam laborum debitis ipsa vitae?",
      blogCateId: "cate2",
    },
    {
      id: "blog3",
      title: "Bài biết mới",
      image: "https://templateacefic.000webhostapp.com/images/Untitled-7.png",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla modi, quos laboriosam laborum debitis ipsa vitae?",
      blogCateId: "cate3",
    },
    {
      id: "blog1",
      title: "Bài biết mới",
      image: "https://templateacefic.000webhostapp.com/images/Untitled-5.png",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla modi, quos laboriosam laborum debitis ipsa vitae?",
      blogCateId: "cate1",
    },
    {
      id: "blog2",
      title: "Bài biết mới",
      image: "https://templateacefic.000webhostapp.com/images/Untitled-6.png",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla modi, quos laboriosam laborum debitis ipsa vitae?",
      blogCateId: "cate2",
    },
    {
      id: "blog3",
      title: "Bài biết mới",
      image: "https://templateacefic.000webhostapp.com/images/Untitled-7.png",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla modi, quos laboriosam laborum debitis ipsa vitae?",
      blogCateId: "cate3",
    },
  ];
  
  let dataCateBlog = [
    {
      id: "all",
      name: "Tất cả",
    },
    {
      id: "cate1",
      name: "Javascript",
    },
    {
      id: "cate2",
      name: "ReactJs",
    },
    {
      id: "cate3",
      name: "Angular",
    },
    {
      id: "cate4",
      name: "NextJs",
    },
  ];
  
  let dataBlogsCopy = dataBlogs;
  
  const listBlog = () => {
    const listCate = document.querySelector(".list-blogs");
    const mapBlog = dataBlogsCopy
      .map((item) => {
        return `<div class="item-blog">
              <div class="image">
                <img
                  src="${item.image}"
                  alt=""
                />
              </div>
              <p class="title">${item.title}</p>
              <p class="content">
               ${item.content}
              </p>
            </div>`;
      })
      .join("");
    listCate.innerHTML = mapBlog;
  };
  listBlog();
  
  const filterBlog = (idCate) => {
    if (idCate === "all") {
      dataBlogsCopy = dataBlogs;
      listBlog();
    } else {
      const filter = dataBlogs.filter((blog) => blog.blogCateId === idCate);
      dataBlogsCopy = filter;
      listBlog();
    }
  };
  
  const listCateBlog = () => {
    const listCate = document.querySelector(".listCate");
    const mapCate = dataCateBlog
      .map((item) => {
        return `<li onclick=filterBlog("${item.id}")>${item.name}</li>`;
      })
      .join("");
    listCate.innerHTML = mapCate;
  };
  listCateBlog();
  