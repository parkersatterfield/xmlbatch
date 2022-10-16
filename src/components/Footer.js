function Footer() {
    const productHuntStyle = {
        width: "187px",
        height: "40px"
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <h5>
                Created & Licensed by Parker Satterfield
                </h5>
                <a href="https://www.producthunt.com/posts/xml-to-sql?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-xml&#0045;to&#0045;sql" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=363681&theme=light" alt="XML&#0032;to&#0032;SQL - Convert&#0032;XML&#0032;files&#0032;to&#0032;a&#0032;SQL&#0032;database | Product Hunt" style={productHuntStyle} width="250" height="54" />
                </a>
                <h6>
                ©️ All Rights Reserved
                </h6>
            </div>
        </footer>
    )
}

export default Footer;