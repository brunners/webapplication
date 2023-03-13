import css from "./footer.module.css";

export default function Footer() {
  return (
    <div id={css.footerContainer}>
      <div className={css.linkContainer}>
        <a href="/impressum">Impressum</a>
        <a href='/AGB'>AGB</a>
        
      </div>
    </div>
  );
}
