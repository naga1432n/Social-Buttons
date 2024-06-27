const Button = props => {
  return <button className={`button ${props.className}`}>{props.text}</button>
}

const element = (
  <div className='container'>
    <h1 className='title'>Social Buttons</h1>
    <div className='buttons-container'>
      <Button className='like' text='Like' />
      <Button className='comment' text='Comment' />
      <Button className='share' text='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
