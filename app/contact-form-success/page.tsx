import BgImage from '@/assets/images/typewriter.webp'
import { FaCircleCheck } from 'react-icons/fa6';
const formSuccessPage = () => {
	return (<div className=''>
		<div
			style={{ backgroundImage: `url('${BgImage.src}')` }}
			className="bg-[#000d] bg-cover bg-bottom bg-blend-darken grid md:grid-cols-2 min-h-[calc(100dvh-76px)] bg-no-repeat"
		>
			<div className='hidden md:block'></div>
			<div className='h-full md:w-[45vw] lg:w-[35vw] text-dawn-pink md:bg-black md:ml-20 flex flex-col justify-center items-center gap-8 text-center px-[4vw]'>
				<div className='flex gap-2 items-center'>
					<FaCircleCheck size={24} />
					<h1 className='text-sm'>Message recieved</h1>
				</div>
				<h3 className='uppercase lg:text-lg font-semibold'>we are thrilled to hear <br />from you!</h3>
				<p className='uppercase text-4xl md:text-5xl 2xl:text-6xl font-semibold'>Thanks <br /> for being <br /> <span className='underline underline-offset-[1rem] md:underline-offset-[1.3rem] block'>here</span></p>
				<p className='mt-6 text-sm lg:text-md'>We're reviewing your request and we'll get in touch within two-to-three business days. We appreciate your interest in onlinelabreports.com</p>
			</div>
		</div>
	</div >);
}

export default formSuccessPage;