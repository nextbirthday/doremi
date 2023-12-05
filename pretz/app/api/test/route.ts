export async function GET() {
    const data = [
        {id:'zzz1'},
        {id:'zzz2'},
        {id:'zzz3'},
    ]
   
    return Response.json({ data })
  }