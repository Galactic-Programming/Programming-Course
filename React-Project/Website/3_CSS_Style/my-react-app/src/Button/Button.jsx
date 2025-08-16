// import style from './Button.module.css'

function Button() {
  // return <button className="button">Click me</button>;
  // return <button className={style.button}>Click me</button>;

  const styles = {
    backgroundColor: 'hsl(200, 100%, 50%)',
    color: 'hsl(0, 0%, 100%)',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return <button style={styles}>Click me</button>;
}

export default Button;
