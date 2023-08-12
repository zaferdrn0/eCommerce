export async function fetchBackendGET(route: string) {
    const response: Response = await fetch(route,
      {
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      return response;
  }
  
  
  export async function fetchBackendPOST(route: string, data: any) {
    const response = await fetch("http://localhost:3000"+route, {
      method: 'POST', 
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    
      return response;
  
  }