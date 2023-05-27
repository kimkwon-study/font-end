import '../Styles/Main.css'

function Main() {
return (
<>
    <div className="main-header">
        <nav className="nav">
            <div className="nav-logo"></div>
            <ul className="nav-menu">
                <li>EAT딜</li>
                <li>맛집 리스트</li>
                <li>망고 스토리</li>
            </ul>
        </nav>
    </div>
    <div className="main-container">
        <div class="main-intro-wrap">
            <img class = "main-image" src="https://mp-seoul-image-production-s3.mangoplate.com/0776fea76b4a824ff583128cb51dd45c.jpg"></img>
            <form class = "main-intro-form">
                <div class = "main-intro-title">솔직한 리뷰, 믿을 수 있는 평점!<br/>망고플레이트</div>
                <div class = "main-intro-search">
                    <input type = "text" id = "search" placeholder = "지역 식당 또는 음식"></input>
                    <input type = "submit" id = "submit-btn" value = "검색"></input>
                </div>
            </form>
        </div>
        <div className='main-content-wrap'>
            <div className='main-content-top'>
                <div className='main-content-title'>믿고 보는 맛집 리스트</div>
                <div className='main-content-more'>리스트 더보기</div>
            </div>
            <div className='main-content-bottom'>
                <ul className='main-content-images'>
                    <li>
                        <img src='https://provengraphics.com/wp-content/uploads/2018/02/300x300.png'></img>
                    </li>
                    <li>
                        <img src='https://provengraphics.com/wp-content/uploads/2018/02/300x300.png'></img>
                    </li>
                    <li>
                        <img src='https://provengraphics.com/wp-content/uploads/2018/02/300x300.png'></img>
                    </li>
                    <li>
                        <img src='https://provengraphics.com/wp-content/uploads/2018/02/300x300.png'></img>
                    </li>
                    <li>
                        <img src='https://provengraphics.com/wp-content/uploads/2018/02/300x300.png'></img>
                    </li>
                    <li>
                        <img src='https://provengraphics.com/wp-content/uploads/2018/02/300x300.png'></img>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="main-footer"></div>
</>
)
}

export default Main