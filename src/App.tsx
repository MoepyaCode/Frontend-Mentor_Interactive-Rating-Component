import { Container, Main, RatingForm, ThankYouMessage } from './components'
import { UseAppSelector } from './store'

export default function App() {
  const rating = UseAppSelector((state) => state.rating)

  return (
    <Main className='bg-blue-very-dark grid place-items-center min-w-full'>
        {
          !rating.submitted ? (
            <RatingForm />
          ) : (
            <ThankYouMessage />
          )
        }
    </Main>
  )
}