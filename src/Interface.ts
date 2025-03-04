interface User {
  readonly dbName: string,
  userId: number,
  userName: string,
  email: string,
  googleId?: string,
  StartTrail(): string,
  getCoupon(couponName: string, off: number): number,

}

const newUser: User = {
  dbName: 'mongoDbconnection',
  userId: 22,
  userName: 'ashish',
  email: 'a@a.com',
  StartTrail: () => {
    return 'Starting trail'
  },
  getCoupon(cname: '50PERT', off: 50) {
    return 10;
  },

}


export { }
