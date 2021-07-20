const PremiumQ = ({isPending, handleSubmit}) => {
    return (  
        <div className="premiumq">
             <form onSubmit={handleSubmit}>
            <h3>Are you looking to upgrade your account to a premium status? With premium, you can access many features including:</h3><br/>
            <ul>
                <li>All of our 100+ exercises!</li>
                <li>A nutrition plan detailed for your goals</li>
                <li>One-on-One Sessions with our experts</li>
                <li>And many more!</li>
            </ul>
            {!isPending && <button>Purchase Premium</button>}
            {!isPending && <button class="skip">Skip</button>}
            {isPending && <button disabled>Signing up...</button>}
            </form>
        </div>
    );
}
 
export default PremiumQ;