export const UserInfoFactory = (userInfo) => {
  return {
    playerID: userInfo.PlayerID,
    playerName: userInfo.PlayerName,
    points: userInfo.Points,
    rank: userInfo.Rank,
    total: userInfo.Total,
    honourPoints: userInfo.HonourPoints,
  }
}
