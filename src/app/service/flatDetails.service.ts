export class FlatDetailsService{
    getFlatDetails(){
        return [
            {
                type:'1BHK',
                squarefeet:'800',
                price: '18Lac',
                tax: 'Included all tax'
            },
             {
                type:'2BHK',
                squarefeet:'1000',
                price: '25Lac',
                tax: 'Included all tax'
            },
             {
                type:'3BHK',
                squarefeet:'1200',
                price: '30Lac',
                tax: 'Included all tax'
            }
        ]

    }
}