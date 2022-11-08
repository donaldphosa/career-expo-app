const universities = [
    {
        image: require('./assets/universities/UL.jpg'),
        name: 'University of Limpopo',
        address:'Polokwane, 0727',
        tel:'012 521 4058',
        website:'https://www.ul.ac.za/',
        faculties:[
            {
                nameOfFaculty:'agriculture and environmental science',
                courses:[
                    {
                        name:'bachelor of agricultural management',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'50%'   
                                },
                                {
                                    subName:'agricultural subjects',
                                    marks:'50%'
                                }

                            ],
                            aps:24
                        }
                    },
                    {
                        name:'bachelor of science in agriculture in agricultural economics',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'50%'   
                                }
                            ],
                            aps:24
                        }
                    },
                    {
                        name:'bachelor of science in agriculture in plant production',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                { 
                                    subName:'physical sciences',
                                    marks:'50%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'50%'   
                                }
                            ],
                            aps:24
                        }
                    },
                    {
                        name:'bachelor of science in agriculture in animal production',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                { 
                                    subName:'physical sciences',
                                    marks:'50%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'50%'   
                                }
                            ],
                            aps:24
                        }
                    },
                    {
                        name:'bachelor of science in agriculture in soil science',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                { 
                                    subName:'physical sciences',
                                    marks:'60%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'50%'   
                                }
                            ],
                            aps:25
                        }
                    },
                    {
                        name:'bachelor of science in agriculture in environmental & resource',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                { 
                                    subName:'life sciences',
                                    marks:'50%'
                                },
                                {
                                    subName:'geography',
                                    marks:'50%'   
                                }
                            ],
                            aps:24
                        }
                    },
                    {
                        name:'bachelor of science in agriculture in water & sanitation sciences',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                { 
                                    subName:'physical sciences',
                                    marks:'60%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'50%'   
                                }
                            ],
                            aps:24
                        }
                    },
                ]
            },
            {
                nameOfFaculty:'mathematics and computer science',
                courses:[
                    {
                        name:'bachelor of sciences in mathematics main stream',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'
                                }

                            ],
                            aps:24
                        }
                    },
                    {
                        name:'bachelor of sciences in mathematics extended curriculum programme',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'50%'   
                                }
                            ],
                            aps:22
                        }
                    },
                    
                ]
            },
            {
                nameOfFaculty:'molecular and life science',
                courses:[
                    {
                        name:'bachelor of sciences in lifesciences main stream',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'
                                }

                            ],
                            aps:26
                        }
                    },
                    {
                        name:'bachelor of sciences in life sciences extended curriculum programme',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'50%'   
                                }
                            ],
                            aps:22
                        }
                    },
                    
                ]
            },
            {
                nameOfFaculty:'physics and mineral science',
                courses:[
                    {
                        name:'bachelor of sciences in physical sciences main stream',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'50%'
                                },

                            ],
                            aps:26
                        }
                    },
                    {
                        name:'bachelor of sciences in physical sciences extended curriculum programme',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'50%'   
                                },
                                {
                                    subName:'life sciences',
                                    marks:'40%'   
                                },

                            ],
                            aps:22
                        }
                    },
                    {
                        name:'bachelor of sciences in geology',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'   
                                },
                               

                            ],
                            aps:26
                        }
                    },
                    
                ]
            },

        ]
    },
    {
        image: require('./assets/universities/UJ.jpg'),
        name: 'University of Johannesburg',
        address: 'Physical Cnr Kingsway & University Roads, Auckland Park Johannesburg, 2092',
        tel: '011 559 4555',
        website:'https://www.uj.ac.za/' ,
        faculties:[
            {
                nameOfFaculty:'art, design and architecture ',
                courses:[
                    {
                        name:'bachelor of architecture',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'additional recognised language',
                                    marks:'50%'
                                },

                            ],
                            aps:28
                        }
                    },
                    {
                        name:'bachelor of design (communication design)',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'   
                                },
                                {
                                    subName:'additional recognised lnguage',
                                    marks:'50%'   
                                },

                            ],
                            aps:24
                        }
                    },
                    {
                        name:'bachelor of digital media design',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'   
                                },
                                {
                                    subName:'additional recognised lnguage',
                                    marks:'50%'   
                                },
                            ],
                            aps:24
                            
                        }
                    },
                    {
                        name:'bachelor of design (industrial design)',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'   
                                },
                                {
                                    subName:'additional recognised lnguage',
                                    marks:'50%'   
                                },
                            ],
                            aps:24

                        }
                    },
                    
                ]
            },
            {
                nameOfFaculty:'art, design and architecture ',
                courses:[
                    {
                        name:'bachelor of architecture',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'additional recognised language',
                                    marks:'50%'
                                },

                            ],
                            aps:28
                        }
                    },
                    {
                        name:'bachelor of design (communication design)',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'   
                                },
                                {
                                    subName:'additional recognised lnguage',
                                    marks:'50%'   
                                },

                            ],
                            aps:24
                        }
                    },
                    {
                        name:'bachelor of digital media design',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'   
                                },
                                {
                                    subName:'additional recognised lnguage',
                                    marks:'50%'   
                                },
                            ],
                            aps:24
                            
                        }
                    },
                    {
                        name:'bachelor of design (industrial design)',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'   
                                },
                                {
                                    subName:'additional recognised lnguage',
                                    marks:'50%'   
                                },
                            ],
                            aps:24

                        }
                    },
                    
                ]
            },
            {
                nameOfFaculty:'bussiness and economics  ',
                courses:[
                    {
                        name:'bachelor of accounting',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                

                            ],
                            aps:33
                        }
                    },
                    {
                        name:'bachelor of hospitality management',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'   
                                },
                                {
                                    subName:'technical mathematics',
                                    marks:'50%'   
                                },

                            ],
                            aps:28
                        }
                    },
                    {
                        name:'bachelor of human resourrce management',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'   
                                },
                                {
                                    subName:'technical mathematics',
                                    marks:'50%'   
                                },
                            ],
                            aps:28
                            
                        }
                    },
                    {
                        name:'bachelor of tourism development and management',
                        requirements:{
                            subjects:[
                                {
                                    subName:'English',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'   
                                },
                                {
                                    subName:'technical mathematics',
                                    marks:'40%'   
                                },
                            ],
                            aps:28

                        }
                    },
                    
                ]
            },
            {
                nameOfFaculty:'education ',
                courses:[
                    {
                        name:' bachelor in foundation phase teaching grd(r-3)',
                        requirements:{
                            subjects:[
                                {
                                    subName:'additional language',
                                    marks:'70%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'
                                },
                                {
                                    subName:'home language',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy or technical maths',
                                    marks:'60%'
                                },
                                

                            ],
                            aps:26
                        }
                    },
                    {
                        name:'bachelor in intermidiate phase teaching',
                        requirements:{
                            subjects:[
                                {
                                    subName:'home language',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics literacy or technical maths',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'   
                                },
                                {
                                    subName:'additional languages',
                                    marks:'70%'   
                                },

                            ],
                            aps:26
                        }
                    },
                    {
                        name:'bachelor in senior phase and FET(grd 8-12)- LO',
                        requirements:{
                            subjects:[
                                {
                                    subName:'home language',
                                    marks:'60%'
                                },
                                {
                                    subName:'additional language',
                                    marks:'70%'
                                },
                               
                            ],
                            aps:26
                            
                        }
                    },
                    
                    
                ]
            },
            {
                nameOfFaculty:'engineering ',
                courses:[
                    {
                        name:' bachelor of civil engineering',
                        requirements:{
                            subjects:[
                                {
                                    subName:'english',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'
                                },
                            ],
                            aps:32
                        }
                    },
                    {
                        name:'bachelor of electrical and electronic engineering',
                        requirements:{
                            subjects:[
                                {
                                    subName:'english',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'
                                },

                            ],
                            aps:32
                        }
                    },
                    {
                        name:'mechanical engineering',
                        requirements:{
                            subjects:[
                                {
                                    subName:'english',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'
                                },

                            ],
                            aps:32
                            
                        }
                    },
                    
                    
                ]
            },
        ]

  },
  {
            image:  require('./assets/universities/UFS.jpg'),
            name: 'University of Free State',
            address:'205 Nelson Mandela Dr, Park West, Bloemfontein, 9301',
            tel:'051 401 9111',
            website:'https://www.ufs.ac.za/',
            faculties:[
                {
                    nameOfFaculty:'education ',
                    courses:[
                        {
                            name:' bachelor of foundation phase teaching',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'50%'
                                    },
                                    
                                ],
                                aps:30
                            }
                        },
                        {
                            name:'bachelor of intermidiate taching',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'50%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'50%'
                                    },
                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
    
                                ],
                                aps:30
                            }
                        },
                        
                        
                        
                    ]
                },,
                {
                    nameOfFaculty:'health ',
                    courses:[
                        {
                            name:' bachelor of medical sciences',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'physical sciences',
                                        marks:'60%'
                                    },
                                    
                                ],
                                aps:30
                            }
                        },
                        {
                            name:'bachelor of surgery',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'physical sciences',
                                        marks:'60%'
                                    },
    
                                ],
                                aps:36
                            }
                        },
                        {
                            name:'bachelor of optometry',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'50%'
                                    },
                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'physical sciences',
                                        marks:'60%'
                                    },
    
                                ],
                                aps:33
                            }
                        },
                        
                        {
                            name:'bachelor of nursing',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'50%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'40%'
                                    },
                                    {
                                        subName:'mathematics literacy',
                                        marks:'70%'
                                    },

                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'physical sciences',
                                        marks:'50%'
                                    },
    
                                ],
                                aps:30
                            }
                        },
                        
                        
                        
                    ]
                },
            ]
          },
          {
            image: require('./assets/universities/Univen.jpg'),
          name: 'University of Venda',
          address:'University Rd, Thohoyandou, 0950',
          tel:'015 962 8000',
          website:'https://www.univen.ac.za/',
          faculties: [
            {
                nameOfFaculty:'education ',
                courses:[
                    {
                        name:' bachelor of foundation phase teaching',
                        requirements:{
                            subjects:[
                                {
                                    subName:'english',
                                    marks:'50%'
                                },
                                
                            ],
                            aps:30
                        }
                    },
                    {
                        name:'bachelor of intermidiate taching',
                        requirements:{
                            subjects:[
                                {
                                    subName:'english',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'60%'
                                },

                            ],
                            aps:30
                        }
                    },
                    
                    
                    
                ]
            },,
            {
                nameOfFaculty:'health ',
                courses:[
                    {
                        name:' bachelor of medical sciences',
                        requirements:{
                            subjects:[
                                {
                                    subName:'english',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'
                                },
                                
                            ],
                            aps:30
                        }
                    },
                    {
                        name:'bachelor of surgery',
                        requirements:{
                            subjects:[
                                {
                                    subName:'english',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'60%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'
                                },

                            ],
                            aps:36
                        }
                    },
                    {
                        name:'bachelor of optometry',
                        requirements:{
                            subjects:[
                                {
                                    subName:'english',
                                    marks:'60%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'50%'
                                },
                                {
                                    subName:'life sciences',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'60%'
                                },

                            ],
                            aps:33
                        }
                    },
                    
                    {
                        name:'bachelor of nursing',
                        requirements:{
                            subjects:[
                                {
                                    subName:'english',
                                    marks:'50%'
                                },
                                {
                                    subName:'mathematics',
                                    marks:'40%'
                                },
                                {
                                    subName:'mathematics literacy',
                                    marks:'70%'
                                },

                                {
                                    subName:'life sciences',
                                    marks:'60%'
                                },
                                {
                                    subName:'physical sciences',
                                    marks:'50%'
                                },

                            ],
                            aps:30
                        }
                    },
                    
                    
                    
                ]
            },{
                    nameOfFaculty:'education ',
                    courses:[
                        {
                            name:' bachelor of foundation phase teaching',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'50%'
                                    },
                                    
                                ],
                                aps:30
                            }
                        },
                        {
                            name:'bachelor of intermidiate taching',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'50%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'50%'
                                    },
                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
    
                                ],
                                aps:30
                            }
                        },
                        
                        
                        
                    ]
                },,
                {
                    nameOfFaculty:'health ',
                    courses:[
                        {
                            name:' bachelor of medical sciences',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'physical sciences',
                                        marks:'60%'
                                    },
                                    
                                ],
                                aps:30
                            }
                        },
                        {
                            name:'bachelor of surgery',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'physical sciences',
                                        marks:'60%'
                                    },
    
                                ],
                                aps:36
                            }
                        },
                        {
                            name:'bachelor of optometry',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'50%'
                                    },
                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'physical sciences',
                                        marks:'60%'
                                    },
    
                                ],
                                aps:33
                            }
                        },
                        
                        {
                            name:'bachelor of nursing',
                            requirements:{
                                subjects:[
                                    {
                                        subName:'english',
                                        marks:'50%'
                                    },
                                    {
                                        subName:'mathematics',
                                        marks:'40%'
                                    },
                                    {
                                        subName:'mathematics literacy',
                                        marks:'70%'
                                    },

                                    {
                                        subName:'life sciences',
                                        marks:'60%'
                                    },
                                    {
                                        subName:'physical sciences',
                                        marks:'50%'
                                    },
    
                                ],
                                aps:30
                            }
                        },
                        
                        
                        
                    ]
                },
          ]

        }
]

export default universities;