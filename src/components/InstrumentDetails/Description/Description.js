import classes from './Description.module.css';

const Description = (props) => {


  return (
    <div className={classes.div}>

      <article className={classes.text}>
        <h1>Description</h1>
        <p>{props.selected.description}</p>
      </article>

      <article className={classes.text}>
        <h1>Features</h1>
        <ul className={classes.features}>
          {props.selected.features?.map((item, index) => 
            <li key={index}>{item}</li>
          )}
        </ul>
      </article>

    </div>
  );
};

export default Description;