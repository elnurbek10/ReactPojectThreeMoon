import './Banner.css';

function Banner({string,clas}) {
  return (
    <section className={`${clas} Banner`}>
      <h1 >{string}</h1>
    </section>
  );
}

export default Banner;