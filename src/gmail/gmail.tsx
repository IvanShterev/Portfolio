
interface GamilProps {
    show: (value: boolean) => void;
    setShowGmail: (value: boolean) => void;
}

const Gmail: React.FC<GamilProps> = ({show, setShowGmail}) => {
    const handleGoBack = () => {
        show(false);
        setShowGmail(false); 
    };
    return (
        <>
            <div className="gmail-cont">
                <span id='go-back-btn' onClick={handleGoBack}></span>
                <h3>You can contact me at:</h3>
                <h4>ivan.shterevv@gmail.com</h4>
            </div>
        </>
    )
}

export default Gmail;