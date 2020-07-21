
const checkMillionDollarIdea = (req, res, next) => {
    const numWeeks = Number(req.body.numWeeks);
    const weeklyRevenue = Number(req.body.weeklyRevenue);
    if(!numWeeks || !weeklyRevenue) {
        res.status(400).send();
    } else {
        let ideaValue = numWeeks * weeklyRevenue;
        
        if(ideaValue < 1000000) {
            res.status(400).send();
            return false;
        }; 

        if( (ideaValue > 1000000) || (ideaValue = 1000000) ) {
          next();
        };
          
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
