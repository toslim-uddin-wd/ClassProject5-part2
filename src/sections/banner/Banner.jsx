import Container from "../../component/Container"
import bannerImage from '../../images/task.png';

function Banner() {
  return (
    <Container className=" grid grid-cols-2 max-sm:grid-cols-1 items-center">
        <div>
            <h1 className="max-sm:text-3xl max-md:text-3xl	 text-5xl max-sm:mt-3 dark:text-red-600 mb-4 font-bold text-rose-700">Task  Management</h1>
            <p className=" text-lg dark:text-stone-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
        </div>
        <div className=" mx-auto max-sm:hidden">
            <img className=" max-w-xs" src={bannerImage} alt="banner image" />
        </div>
    </Container>
  )
}

export default Banner