import Button from "./Button";

const App = () => {
    return (
        <div>
            <h1>Useful Website</h1>
            <h3>Which Website do you want to open?</h3>
            <Button name = "Google"  link="https://google.com"/>
            <Button name ="Facebook"  link="https://facebook.com"/>
            <Button name ="Instagram"  link="https://instagram.com"/>
            <br></br>
            <Button name ="Youtube"  link="https://youtube.com"/>
            <Button name ="Github"  link="https://github.com/RoshanKhalinG"/>
            <Button name ="LinkedIN"  link="https://linkedin.com"/>
        </div>
    );
}

export default App;
