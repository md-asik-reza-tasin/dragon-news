import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';

export default function Qzone(){
    return (
        <div className="bg-[#F3F3F3] py-5 px-4 mt-8 mx-2 rounded-md">

            <h1 className="font-display font-semibold">Q-Zone</h1>
            <div>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>

        </div>
    )
}