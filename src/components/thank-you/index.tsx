import { assets } from '../../assets'
import { UseAppSelector } from '../../store'
import Container from '../container'
import Wrapper from '../wrapper'

export function ThankYouMessage() {
    const rating = UseAppSelector((state) => state.rating)

    return (
        <Container className='relative bg-gradient-to-b from-[#232A34] to-[#181E27] max-w-[412px] w-[calc(100%-24px)] min-h-[360px] mx-[24px] rounded-3xl flex flex-col justify-evenly items-center p-[24px]'>

        <img className='max-w-[144px]' src={assets.illustrationThankYou} alt="" />

        <Wrapper className=' bg-blue-dark text-orange-light font-overpass px-[15px] py-[5px] rounded-full text-[14px]'>
            You selected {rating.rating} out of 5
        </Wrapper>

        <h1 className='font-overpass font-bold text-[24px] text-white-pure'>Thank you!</h1>

        <p className='font-overpass text-grey-light text-[14px] text-center'>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>

        </Container>
    )
}
