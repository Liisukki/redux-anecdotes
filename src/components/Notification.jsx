import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification) // Ota notification reducerin tila käyttöön

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  // Jos notification on tyhjä, ei renderöidä mitään
  if (!notification) {
    return null
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
