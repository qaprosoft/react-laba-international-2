function Footer({onRefreshAll, isDisabled}) {
  return (
    <footer className="footer">
      <button
        type="button"
        className="footer__button"
        disabled={isDisabled}
        onClick={onRefreshAll}
      >
        Refresh All
      </button>
    </footer>
  );
}

export default Footer;
