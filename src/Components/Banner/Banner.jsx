import './Banner.css';

function Banner({string,clas}) {
  return (
    <section className={`${clas}`}>
      <h1 >{string}</h1>
    </section>
  );
}

export default Banner;