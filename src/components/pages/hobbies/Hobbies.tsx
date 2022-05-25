import { ArrowRightOutline } from 'heroicons-react'

function Hobbies() {
  return (
    <>
      <div className="relative flex p-6 w-60 h-60 xs:w-96 xs:h-96 md:w-96 md:h-96 bg-white rounded-lg border bg-white-100">
        <div className="mb-10 ">
          <p className="mb-3 text-left font-bold text-2xl text-primary-100">Hobbies</p>
        </div>

        <div className=" flex justify-center items-center text-primary-100 absolute p-4 bottom-0 right-0 ">
          <p className="text-xs">See all hobbies</p>&nbsp;&nbsp;
          <ArrowRightOutline />
        </div>
      </div>
    </>
  )
}

export default Hobbies
