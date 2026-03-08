import { RotatingLines } from "react-loader-spinner"

const Loading = () => {
    return (
        <div className="min-h-screen absolute inset-0 flex flex-col justify-center items-center z-50 bg-black/25 ">
            <RotatingLines
                visible={true}
                height="150"
                width="150"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
export default Loading
