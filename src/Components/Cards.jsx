import { GoArrowRight } from "react-icons/go";
function Cards() {
  return (
    <div className="w-full py-5">
      <div className="max-w-screen-xl mx-auto flex gap-1 overflow-hidden">
        <div className="w-[35%] h-[60vh] bg-zinc-600 rounded-xl px-8 py-4 flex flex-col items-start justify-between hover:px-10 hover:bg-purple-600">
          <div className="p-5 w-full h-full capitalize">
            <div className="flex justify-between">
              <h4>up next:culture</h4>
              <GoArrowRight />
            </div>
            <h1 className="mt-10 text-4xl font-bold">lets get to it, together.</h1>
          </div>
          <h1 className="text-2xl">Explore what drives our team.</h1>
        </div>
        <div className="w-[65%] h-[60vh] bg-zinc-600 rounded-xl px-8 py-4 flex flex-col items-start justify-between hover:px-10 hover:bg-purple-600">
          <div className="p-5 w-full h-full capitalize">
            <div className="flex justify-between">
              <h4>up next:culture</h4>
              <GoArrowRight />
            </div>
            <h1 className="mt-10 text-4xl font-bold">lets get to it, together.</h1>
          </div>
          <div className="w-full capitalize">
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-bold ">start a project</h2>
              <button className="w-1/4 py-2 px-3 border-2 text-2xl rounded-full">contact us</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Cards;
