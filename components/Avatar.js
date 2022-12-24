export default function Avatar({url}) {
  return (
   <img src={url} loading="lazy" alt="profile-avatar" className="h-10 self-center rounded-full cursor-pointer transition duration-150 transform hover:scale-110"/>
  )
}
