// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.user.findMany({
//       include: {
//         todo: {
//           include: {
//             tag: true,
//           },
//         },
//       },
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.user.findMany({
//       select: {
//         firstName: true,
//         lastName: true,
//       },
//       where: {
//         AND: [
//           {
//             firstName: {
//               startsWith: 'a',
//             },
//             validated: true,
//           },
//         ],
//       },
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

/* DISTINCT */
// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.user.findMany({
//       select: {
//         validated: true,
//       },
//       distinct: ['validated'],
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

/* findUnique */
// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.user.findUnique({
//       where: {
//         id: 3,
//       },
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

/* groupBy */
// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.user.groupBy({
//       by: ['validated'],
//       _count: true,
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

/* count */
// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.user.count({
//       /*   where: {
//         id: 3,
//       }, */
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

/* aggregate */
// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.user.aggregate({
//       _min: {
//         createdAt: true,
//       },

//       _max: {
//         createdAt: true,
//       },

//       _count: {
//         createdAt: true,
//       },
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

/* sorting */
// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.user.findMany({
//       where: {
//         firstName: {
//           startsWith: 'r',
//         },
//       },

//       orderBy: [
//         {
//           lastName: 'asc',
//         },
//         {
//           createdAt: 'desc',
//         },
//       ],
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

/* skip and take */
// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.user.findMany({
//       skip: 2,
//       take: 2,
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

/* $queryRaw */
// export const queryData = async () => {
//   try {
//     const queryOutput = await prisma.$queryRaw`SELECT * FROM KITKAT.USER`
//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   }

// export const queryData = async (searchParams) => {
//   let query = searchParams
//   try {
//     const queryOutput = await prisma.user.findMany({
//       where: {
//         firstName: query,
//       },
//     })

//     return queryOutput
//   } catch (error) {
//     console.log(error)
//   } 
