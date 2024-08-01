import React from 'react'
import { assets } from '../../assets'
import Wrapper from '../wrapper'
import { useAppDispatch, UseAppSelector } from '../../store'
import { setRating, setSubmitted } from '../../store/features/RatingSlice'
import Container from '../container'

type RatingPropsType = number[]
const ratingNumbers: RatingPropsType = [1, 2, 3, 4, 5]

export default function RatingForm() {
    const rating = UseAppSelector((state) => state.rating)
    const dispatch = useAppDispatch()
    const [disabled, setDisabled] = React.useState(true)    

    React.useEffect(() => {
        if (disabled && rating.rating !== 0) {
            setDisabled(false)
        }
    }, [rating.rating])

    return (
        <Container className='relative bg-gradient-to-b from-[#232A34] to-[#181E27] max-w-[412px] w-[calc(100%-24px)] min-h-[360px] mx-[24px] rounded-3xl flex flex-col justify-between p-[24px]'>

            <Wrapper className='w-[40px] aspect-square grid place-items-center bg-blue-dark rounded-[50%]'>
                <img className='w-[14px] aspect-square' src={assets.iconStar} alt="icon star" />
            </Wrapper>

            <h1 className='font-overpass font-bold text-[24px] text-white-pure'>
                How did we do?
            </h1>

            <p className='font-overpass text-grey-light text-[14px]'>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>

            <Wrapper className='relative flex flex-row flex-nowrap justify-between items-center'>
                {
                    ratingNumbers.map((ratingNumber, index) => (
                        <button onClick={() => dispatch(setRating({rating: ratingNumber}))} key={index} className={`w-[42px] aspect-square rounded-[50%] bg-blue-dark grid place-items-center text-grey-light font-overpass cursor-pointer leading-[1] ${ratingNumber === rating.rating ? 'text-blue-dark bg-white-pure' : 'text-grey-light bg-blue-dark hover:bg-orange-light hover:text-blue-dark'} transition-all duration-300`}>
                            {ratingNumber}
                        </button>
                    ))
                }
            </Wrapper>

            <button onClick={() => dispatch(setSubmitted())} disabled={disabled}  className={`text-blue-very-dark bg-orange-light ${!disabled ? 'hover:bg-white-pure': ''} h-[45px] rounded-full font-overpass tracking-widest font-bold text-[14px] transition-all duration-300`}>
                SUBMIT
            </button>

        </Container>
    )
}