

function Container(props) {
  return (
    <div className={`px-3 max-w-screen-lg m-auto ${props.className}`}>{props.children}</div>
  )
}

export default Container