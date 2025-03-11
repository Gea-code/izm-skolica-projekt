const PostDate = ({ date }) => {
    return (
        new Date(date).toLocaleString("hr-HR",{
            day: "2-digit",
            month: "long",
            year: "numeric"
        })
    );    
}

export default PostDate;