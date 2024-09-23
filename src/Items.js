import SingleItem from './SingleItem'
import { useFetchTasks } from './reactQueryCustomHooks'

const Items = () => {
  const { isPending, isError, data } = useFetchTasks()

  if (isPending) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>
  }

  if (isError) {
    return <p style={{ marginTop: '1rem' }}>There was an error...</p>
  }

  // if (error) {
  //   return <p style={{ marginTop: '1rem' }}>{error.message}</p>
  // }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
