

export default function Footer(props: {className: string}){
    return (
    <div className={props.className}>
        <a href="https://www.flaticon.com/free-icons/folder" title="folder icons" className="footer_element">
            Folder icons created by Freepik - Flaticon
        </a>
        <p className="footer_element">Developed using React with Next.JS</p>
        <p className="footer_element">Deployed using AWS Amplify</p>
    </div>
    );
}