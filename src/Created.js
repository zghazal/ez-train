const Created = ({isPending,handleSubmit}) => {
    return ( 
        <div className="created">
            <form onSubmit={handleSubmit}>
            <h3>Thank you for creating an account with us! Now you can check your progress by checking out your profile on the top right. Click the button below to get started and achieve your goals.</h3><br/>
            {!isPending && <button>Get Started</button>}
            {isPending && <button disabled>Signing up...</button>}
            </form>
        </div>
     );
}
 
export default Created;