import { Spinner } from '@nextui-org/react'

const TimeCard = ({ time, unit }) => (
    <div className="md:w-[150px] md:h-[150px] w-[100px] h-[100px] max-h-[150px] flex flex-col bg-secondary">
        <div className="text-white md:text-4xl text-2xl font-bold h-24 flex items-center justify-center">
            <Spinner color="white" />
        </div>
        <div className="text-secondary md:text-2xl text-xl font-medium bg-white flex-grow flex items-center justify-center">
            {unit}
        </div>
    </div>
)
const Loading = () => {
    return (
        <div className="flex flex-row flex-wrap items-center gap-5">
            <TimeCard unit="Days" />
            <TimeCard unit="Hours" />
            <TimeCard unit="Minutes" />
            <TimeCard unit="Seconds" />
        </div>
    )
}

export default Loading
