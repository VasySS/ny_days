export function getDaysToNY(currentYear){
    let ny = new Date(currentYear.getFullYear()+1, 0, 1)

    return (ny.getTime()- currentYear.getTime())/86_400_000
}