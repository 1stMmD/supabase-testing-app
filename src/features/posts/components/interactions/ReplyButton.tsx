import React , {useState , useEffect, useRef} from 'react'
import { IconType } from 'react-icons/lib'
import { useCheckForReply } from '../../hooks'
import { useSelector } from 'react-redux'
import { rootType } from '../../../../redux/store'

type props = {
    FilledIcon : IconType,
    LinedIcon : IconType,
    color : string,
    fillColor : string,
    post : any,
}

const ReplyButton : React.FC<props> = ({
    FilledIcon , 
    LinedIcon ,
    color,
    fillColor,
    post,
}) => {
  const user : string | null = useSelector((state : rootType) => state.AuthSlice.user);
  const [replies , setReplies] = useState<number>(post.replies);
  const [replied] = useCheckForReply(post?.ID, user);

  const container = useRef<null | HTMLDivElement>(null)

  return (
    <div
    className='
    flex justify-center items-center
    relative
    '>
      <button
      onClick={() => {
      }}
      className={`
      transition-colors
      rounded-full group
      p-1.5
      ${color}
      text-neutral-600
      `}>
        
        { replied ? 
          
          <FilledIcon
          className={`
          text-[1rem]
          ${fillColor}
          `}/>
        :
          <LinedIcon
          className={`
          text-[1rem]
          `}/>
        }

      </button>
      
      <span
      className='
      text-[.9rem]
      '>
          { replies?.toString() || "0"}
      </span>
      
    </div>
  )
}

export default ReplyButton