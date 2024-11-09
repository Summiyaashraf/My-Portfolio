import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative flex justify-center items-center h-[800px]">
            <Image
                src="/Portfolio.jpeg"  
                alt="Portfolio with Confetti"
                layout="fill"
                objectFit="contain"
            />
        </div>
    );
};

export default Hero;
