import HelpLink from "../component/page";
export default function PageLayout(){
    return(
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <HelpLink title="Docs" desc="Find in-depth information about Next.js features and API." url="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"></HelpLink>
        <HelpLink title="Learn" desc="Learn about Next.js in an interactive course with&nbsp;quizzes!" url="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"></HelpLink>
        <HelpLink title="Templates" desc="Explore starter templates for Next.js." url="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"></HelpLink>
        <HelpLink title="Deploy" desc="Istantly deploy your Next.js site to a shareable URL with Vercel." url="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"></HelpLink>
      </div>
    )
}