export default {
  formatRatings: () => {
    return Select_dbo_MatterRatings1.data.map(r => ({
      userId: r.UserID,
      rating: r.HourlyRating,
      name: r.UserName,
			matterId :r.MatterID
    }));
  }
}
