function Footer({onRefreshAll}) {
  return (
    <footer className="footer">
      <button className="footer__button" onClick={onRefreshAll}>
        Refresh All
      </button>
    </footer>
  );
}

export default Footer;
